import { useState } from 'react'
import type { Vehicle, VehicleStatus} from './types/vehicle'
import {mockVehicles} from './data/mockVehicles'
import './App.css'

import SearchBar from './components/SearchBar'
import StatusFilter from './components/StatusFilter'
import StatsBar from './components/StatsBar'
import VehicleTable from './components/VehicleTable'
import VehicleDetail from './components/VehicleDetail'

function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles)

  const [searchTerm, setSearchTerm] = useState<string>('')

  const [statusFilter,setStatusFilter] = useState<VehicleStatus | 'all'>('all')

  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null) 

  const handleRowClick = (vin: string) => {
  setSelectedVehicleId(vin)
}

  const handleStatusChange = (vin: string, status: VehicleStatus) => {
    setVehicles((prev) => prev.map((v) => (v.vin === vin ? { ...v, status } : v)))
  }

  const selectedVehicle = vehicles.find((v) => v.vin === selectedVehicleId) ?? null

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearchTerm =
      vehicle.vin.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().startsWith(searchTerm.toLowerCase())

    const matchesStatusFilter = statusFilter === 'all' || vehicle.status === statusFilter

    return matchesSearchTerm && matchesStatusFilter
  })

  return (
    <div className="app">
      <h1 className="app-title">Fleet Dashboard</h1>
      <div className="app-controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
      </div>
      <StatsBar vehicles = {vehicles}/>
      <VehicleTable vehicles={filteredVehicles} handleClick={handleRowClick} />
      <VehicleDetail
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicleId(null)}
        onStatusChange={handleStatusChange}
      />
    </div>
  )
}

export default App

import { useState } from 'react'
import type { Vehicle, VehicleStatus} from './types/vehicle'
import {mockVehicles} from './data/mockVehicles'

import SearchBar from './components/SearchBar'
import StatusFilter from './components/StatusFilter'

function App() {
  // const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles)

  const [searchTerm, setSearchTerm] = useState<string>('')

  const [statusFilter,setStatusFilter] = useState<VehicleStatus | 'all'>('all')

  // const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
      
    </>
  )
}

export default App

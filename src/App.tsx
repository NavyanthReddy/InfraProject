import { useState } from 'react'
// import { Vehicle, VehicleStatus} from './types/vehicle'
import {mockVehicles} from './data/mockVehicles'

import SearchBar from './components/SearchBar'

function App() {
  // const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles)

  const [searchTerm, setSearchTerm] = useState<string>('')

  // const [statusFilter,setStatusFilter] = useState<VehicleStatus | 'all'>('all')

  // const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
    </>
  )
}

export default App

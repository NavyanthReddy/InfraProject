import VehicleRow from './VehicleRow'
import type { Vehicle } from '../types/vehicle'

type VehicleTableProps = {
  vehicles: Vehicle[]
  handleClick: (vin: string) => void
}

function VehicleTable({ vehicles, handleClick }: VehicleTableProps) {
      return (
    <div>
      {vehicles.map((vehicle) => (
        <VehicleRow key={vehicle.vin} vehicle={vehicle} onClick={() => handleClick(vehicle.vin)} />
      ))}
    </div>
  )
}

export default VehicleTable

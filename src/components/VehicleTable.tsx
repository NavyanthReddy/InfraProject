import VehicleRow from './VehicleRow'
import type { Vehicle } from '../types/vehicle'

type VehicleTableProps = {
  vehicles: Vehicle[]
  handleClick: (vin: string) => void
}

function VehicleTable({ vehicles, handleClick }: VehicleTableProps) {
      return (
    <div className="vehicle-table">
      {vehicles.length === 0 ? (
        <p className="vehicle-table__empty">No vehicles match your search.</p>
      ) : (
        vehicles.map((vehicle) => (
          <VehicleRow key={vehicle.vin} vehicle={vehicle} onClick={() => handleClick(vehicle.vin)} />
        ))
      )}
    </div>
  )
}

export default VehicleTable

import type { Vehicle, VehicleStatus } from '../types/vehicle'

type VehicleDetailProps = {
  vehicle: Vehicle | null
  onClose: () => void
  onStatusChange: (vin: string, status: VehicleStatus) => void
}

const STATUS_OPTIONS: VehicleStatus[] = ['active', 'offline', 'in service']

function VehicleDetail({ vehicle, onClose, onStatusChange }: VehicleDetailProps) {
  if (!vehicle) {
    return null
  }

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h2>{vehicle.vin}</h2>
      <p>Model: {vehicle.model}</p>
      <p>
        Status:{' '}
        <select
          value={vehicle.status}
          onChange={(e) => onStatusChange(vehicle.vin, e.target.value as VehicleStatus)}
        >
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </p>
      <p>Battery: {vehicle.batteryPercent}%</p>
      <p>Location: {vehicle.location}</p>
    </div>
  )
}

export default VehicleDetail

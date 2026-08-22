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
    <div className="vehicle-detail-overlay" onClick={onClose}>
      <div className="vehicle-detail" onClick={(e) => e.stopPropagation()}>
        <button className="vehicle-detail__close" onClick={onClose}>
          Close
        </button>
        <h2 className="vehicle-detail__vin">{vehicle.vin}</h2>
        <p className="vehicle-detail__row">
          <span className="vehicle-detail__label">Model</span>
          {vehicle.model}
        </p>
        <p className="vehicle-detail__row">
          <span className="vehicle-detail__label">Status</span>
          <select
            className="vehicle-detail__status-select"
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
        <p className="vehicle-detail__row">
          <span className="vehicle-detail__label">Battery</span>
          {vehicle.batteryPercent}%
        </p>
        <p className="vehicle-detail__row">
          <span className="vehicle-detail__label">Location</span>
          {vehicle.location}
        </p>
      </div>
    </div>
  )
}

export default VehicleDetail

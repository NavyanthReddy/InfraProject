import type { VehicleStatus } from '../types/vehicle'

type StatusFilterProps = {
  statusFilter: VehicleStatus | 'all'
  setStatusFilter: (filter: VehicleStatus | 'all') => void
}


function StatusFilter({ statusFilter, setStatusFilter }: StatusFilterProps) {
  return (
    <div className="status-filter">
      <select
        className="status-filter__select"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value as VehicleStatus | 'all')}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="in service">In Service</option>
        <option value="offline">Offline</option>
      </select>
    </div>
  )
}

export default StatusFilter

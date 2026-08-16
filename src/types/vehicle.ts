export type VehicleStatus = 'active' | 'offline' | 'in service' 

export interface Vehicle {
  vin: string
  model: string
  status: VehicleStatus
  batteryPercent: number
  location: string
}

//search bar; list of vehicles; vehicle details; filter by status; display number of active
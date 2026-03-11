// 자원 종류 정의
export type ResourceType =
  | 'ironOre'
  | 'copperOre'
  | 'coal'
  | 'stone'
  | 'ironIngot'
  | 'copperIngot'
  | 'ironPlate'
  | 'copperWire'
  | 'gear'
  | 'circuit'

// 자원 정보
export interface ResourceInfo {
  name: string
  icon: string
  category: 'raw' | 'processed' | 'component'
}

// 기계 종류 정의
export type MachineType =
  | 'miner'
  | 'smelter'
  | 'press'
  | 'wireDrawer'
  | 'gearCutter'
  | 'assembler'

// 레시피: 기계가 어떤 자원을 소비/생산하는지 정의
export interface Recipe {
  inputs: Partial<Record<ResourceType, number>>
  outputs: Partial<Record<ResourceType, number>>
  duration: number // 1회 생산 소요 시간 (초)
}

// 기계 정보
export interface MachineInfo {
  name: string
  icon: string
  description: string
  recipe: Recipe
  baseCost: Partial<Record<ResourceType, number>>
  costMultiplier: number // 추가 구매 시 비용 배율
  unlockRequirement?: Partial<Record<ResourceType, number>>
}

// 보유 중인 기계 상태
export interface OwnedMachine {
  type: MachineType
  count: number
  level: number
  progress: number // 현재 생산 진행도 (0~1)
  active: boolean
}

// 전체 게임 상태
export interface GameState {
  resources: Record<ResourceType, number>
  machines: Record<MachineType, OwnedMachine>
  totalProduced: Record<ResourceType, number>
  unlocked: Set<MachineType>
  lastTick: number
  prestigeCount: number
  prestigeBonus: number // 프레스티지 영구 생산 배율
}

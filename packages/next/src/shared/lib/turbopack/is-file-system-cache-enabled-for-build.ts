import type { NextConfigComplete } from '../../../server/config-shared'

export function isFileSystemCacheEnabledForBuild(
  config: NextConfigComplete
): boolean {
  return config.experimental?.turbopackFileSystemCacheForBuild || false
}

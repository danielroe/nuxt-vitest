import { importModule } from 'local-pkg'
import { EnvironmentNuxt } from '../types'

export default <EnvironmentNuxt> async function () {
  const { Window, GlobalWindow } = await importModule('happy-dom') as typeof import('happy-dom')
  const window = new (GlobalWindow || Window)() as any

  return {
    window,
    teardown() {
      window.happyDOM.cancelAsync()
    }
  }
} 
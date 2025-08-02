import { ThemeContext } from '../context/ThemeContext'

export const withContext = Component => {
  const EnhancedComponent = props => {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} {...theme} />}
      </ThemeContext.Consumer>
    )
  }

  EnhancedComponent.displayName = `withContext(${Component.displayName ?? Component.name})`

  return EnhancedComponent
}
type ErrorName = 'UserExistsError' | 'AuthenticationError' | 'UnknownError'
type ErrorInfo = {
  statusCode: number
  message: string
}
const statusCodeMap: Record<ErrorName, ErrorInfo> = {
  UserExistsError: {
    message: 'User already exists',
    statusCode: 409,
  },
  AuthenticationError: {
    message: 'Invalid username or password',
    statusCode: 401,
  },
  UnknownError: {
    message: 'Unknown error',
    statusCode: 500,
  },
}

export default class AppError extends Error {
  public statusCode: number

  constructor(public name: ErrorName) {
    const info = statusCodeMap[name]
    super(info.message)
    this.statusCode = info.statusCode
  }
}

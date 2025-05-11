// src/pages/_error.tsx

import { NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

function ErrorPage({ statusCode }: ErrorProps) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{statusCode || 'Oops'} — Something went wrong</h1>
      <p>
        {statusCode === 404
          ? 'This page could not be found.'
          : 'An unexpected error occurred on the server.'}
      </p>
    </div>
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404
  return { statusCode }
}

export default ErrorPage

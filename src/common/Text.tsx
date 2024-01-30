import { Fragment } from 'react'

const Text = ({ children }: { children: string }) => {
  const message = children.split('\n').map((str, idx, arr) => {
    return (
      <Fragment key={idx}>
        {str}
        {idx === arr.length - 1 ? null : <br />}
      </Fragment>
    )
  })
  return <div>{message}</div>
}

export default Text

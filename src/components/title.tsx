import React from 'react'
import { Link } from 'react-router-dom'

interface ITitleProps {
  textTitle: string
  textLinkTo?: string
  iconLinkTo?: string
  linkTo?: string
}

const Title = (props: ITitleProps) => {
  const { textTitle, linkTo, textLinkTo, iconLinkTo } = props
  return (
    <>
      <div className="row align-items-center mt-4 mb-3">
        <div className="col-sm">
          <h1 className="h2">{textTitle}</h1>
        </div>
        {linkTo && (
          <div className="col-sm-3">
            <Link to={linkTo} className="btn btn-primary btn-block">
              <i className={`${iconLinkTo} mr-2`} />{textLinkTo}
            </Link>
          </div>
        )}
      </div>
      <div className="dropdown-divider"></div>
    </>
  )
}

export default Title
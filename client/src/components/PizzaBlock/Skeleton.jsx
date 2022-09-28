import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={0}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="132" cy="133" r="120" />
    <rect x="-3" y="271" rx="10" ry="10" width="280" height="25" />
    <rect x="-5" y="312" rx="10" ry="10" width="280" height="88" />
    <rect x="1" y="427" rx="10" ry="10" width="95" height="30" />
    <rect x="127" y="419" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton
import React from "react"
import PropTypes from "prop-types"
import styles from "../styles/layout.module.css"

const Layout = ({ children }) => {
  return (
    <div lang="EN">
      <div className={styles.layout}>

        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
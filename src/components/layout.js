import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import styles from "../styles/layout.module.css"

const Layout = ({ children }) => {
  return (
    <div lang="EN">
      <div className={styles.layout}>
        <Helmet async>
          <title>Ensured Employement Services</title>
        </Helmet>

        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
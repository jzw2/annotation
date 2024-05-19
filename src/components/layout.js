
// import * as React from 'react'
// import { Link, useStaticQuery, graphql } from 'gatsby'
// import {
//   container,
//   heading,
//   navLinks,
//   navLinkItem,
//   navLinkText,
//   siteTitle,
// } from './layout.module.css'

// const Layout = ({ pageTitle, children }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <div className={container}>
//       <header className={siteTitle}>{data.site.siteMetadata.title}</header>
//       <nav>
//         <ul className={navLinks}>
//           <li className={navLinkItem}>
//             <Link to="/" className={navLinkText}>
//               Home
//             </Link>
//           </li>
//           <li className={navLinkItem}>
//             <Link to="/about" className={navLinkText}>
//               About
//             </Link>
//           </li>

//  <li className={navLinkItem}>
//             <Link to="/blog" className={navLinkText}>
//               Blog
//             </Link>
//           </li>

//         </ul>
//       </nav>
//       <main>
//         <h1 className={heading}>{pageTitle}</h1>
//         {children}
//       </main>
//     </div>
//   )
// }
import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Header = styled.header`
  background: #333;
  color: white;
  padding: 1rem 0;
  text-align: center;
`

const Main = styled.main`
  flex: 1;
  padding: 2rem;
`

const Footer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'author', content: data.site.siteMetadata.author },
        ]}
      />
      <Container>
        <Header>
          <h1>{data.site.siteMetadata.title}</h1>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <p>&copy; 2024 Word Annotation Task</p>
        </Footer>
      </Container>
    </>
  )
}

export default Layout


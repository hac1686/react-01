
import React from 'react'
import { Layout } from 'antd'
import NavMenu from '../components/Menu'
import Welcome from '../components/Welcome'
import Message from '../components/Message'
import Footer from '../components/Footer'

function Home() {
  return (
    <React.Fragment>
      <Layout.Header>
        <NavMenu />
      </Layout.Header>
      <Layout.Content style={{ padding: '16px 40px', textAlign: 'center' }}>
        <Welcome age={25} name="Jan" />
        <Message />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        <Footer />
      </Layout.Footer>
    </React.Fragment>
    )
}

export default Home



// import React from 'react'
// import { Layout } from 'antd'
// //import Menu from '../components/Menu'
// import Welcome from '../components/Welcome'
// // import Footer from '../components/Footer'
// import Message from '../components/Message'

// function Home() {
//     const userName = 'Jan'

//     return (
//         <React.Fragment>
//             <Layout.Content>
//                 <Welcome name={userName} />
//                 <Welcome name="Heather" />
//                 <Welcome name="Steve" />
//                 <Welcome />
//                 <Message />
//             </Layout.Content>
//         </React.Fragment>

//     )


// }

// export default Home
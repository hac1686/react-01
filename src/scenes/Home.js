import React from 'react'
import { Layout } from 'antd'
//import Menu from '../components/Menu'
import Welcome from '../components/Welcome'
// import Footer from '../components/Footer'
import Message from '../components/Message'

function Home() {
    const userName = 'Jan'

    return (
        <React.Fragment>
            <Layout.Content>
                <Welcome name={userName} />
                <Welcome name="Heather" />
                <Welcome name="Steve" />
                <Welcome />
                <Message />
            </Layout.Content>
        </React.Fragment>

    )


}

export default Home
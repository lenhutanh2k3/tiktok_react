import Home from '~/Pages/Home'
import Following from '~/Pages/Following'
import Upload from '~/Pages/Upload'
import HeaderOnly from '~/components/Layout/HeaderOnly'
//khong can dang nhap van vao dc
const publicRoute =[
    {path:'/',component:Home},
    {path:'/following',component:Following ,layout:HeaderOnly},
    {path:'/upload',component:Upload, layout:null}
]

// khong dang nhap khong vao dc
const privateRoute =[]

export {publicRoute,privateRoute}
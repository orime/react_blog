import { Avatar, Divider } from "antd";
import '../static/style/components/author.css'

const Author = () => {
  return (
     <div className='author-div comm-box'>
       <div>
         <Avatar size={100} src='https://upload.jianshu.io/users/upload_avatars/2228081/5633fd13e0a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120' />
       </div>
       <div className='author-introduction'>
         阔别三江雪，独奏二重萧；浮生何所似，天地一沙雕。
         <Divider>社交账号</Divider>
         <Avatar size={28} icon='github' className='account' />
         <Avatar size={28} icon='qq' className='account' />
         <Avatar size={28} icon='wechat' className='account' />
       </div>
     </div>
  )
}

export default Author

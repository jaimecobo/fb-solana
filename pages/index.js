

export default function Home() {
  return (
  <div className={style.wrapper}>
    {/* <Header/> */}

    {registered ? (
      <div className={style.homewrapper}>
        {/* <sidebar/> */}
        <div className={style.main}>
            {/* <Feed/> */}
        </div>  
        {/* <RightSidebar/> */}
      </div>
    ):(
      <div className={style.signupContainer}>
        {/* <Signup/> */}
      </div>
    )}
  </div>
  )
}

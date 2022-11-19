function Form() {
    return (
        <>
            <main>
                <div className="main">
                    <div className="heading-section">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="logo-img" />
                        <div className="a-ri8">
                            <span>
                                Facebook helps you connect and share with the people in your life.
                            </span>
                        </div>
                    </div>

                    <div className="form">
                        <form className="a-form">
                            <input type="email" id="Email" className="a-email" name="Email" placeholder="Email address or phone number"
                                autoFocus="autofocus" required />
                            <input type="password" id="Password" className="a-pss" name="Password" placeholder="Password"
                                autoFocus="autofocus" />
                            <input type="submit" className="a-sub" value="Log In" />
                            <a href="" className="a-link">Forgotten password?</a>
                            <hr className="a-hr" />
                            <input type="submit " value="Create New Account" className="a-but" />
                        </form>
                        <div className="create-page">
                            <a href="" className="a-href">Create a Page</a> for a celebrity, band or business.
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Form;
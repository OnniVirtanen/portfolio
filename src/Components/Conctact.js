import "../Styles/contact.css";

const Conctact = () => {

    return (
        <div className='container'>
            <div className='contact'>
                <h2 id="contact">Contact me</h2>
                <div className='contact-me-flex-container'>
                    <form>
                        <div className='form-name-and-company'>
                            <input autoComplete="off" type="text" name="name" placeholder="name" />
                            <input autoComplete="off" type="text" name="company" placeholder="company" />
                        </div>
                        <input autoComplete="off" type="email" name="email" placeholder="email" />
                        <input autoComplete="off" type="message" name="message" placeholder="message" />
                        <input className='last' type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Conctact;
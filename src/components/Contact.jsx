import React from 'react'

 const Contact = () => {
  return (
    <div id="projects" className="max-w-[1048px] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Contact
    </h1>
    <form action='' method='POST' encType='multipart/form-data'>
        <div>
            <div>
                <label>Name</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" name="phone" />
            </div>
            <div>
                <label>Email </label>
                <input type="text" name="email" />
            </div>
            <div>
                <label>Subject</label>
                <input type="text" name="subject" />
            </div>
            <div>
                <label>Message</label>
                <textarea rows='10' name="message" ></textarea>
            </div>
        </div>
    </form>
    </div>
  )
}
export default Contact

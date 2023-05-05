import React from 'react'

const Contact = () => {
  return (
    <div>
        <h6 className="display-6">Contact Us</h6>
    
        <div class="container contact-form border border-dark   " style={{padding:"0px"}}>
                <img src='https://media.designrush.com/articles/1403/conversions/_1530667899_390_yEZPsIaoTI3ZNDdB-croppedUundb-jpg-preview.jpg' style={{width:"883px",height:"210px",paddding:"0px",objectFit:"fill"}}/>
               <div class="contact-image">
              <img src="https://image.ibb.co/kUagtU/rocket_contact.png"/>
            </div>
            <form>
                <h3>Drop Us a Message</h3>
               <div class="row cp">
                    <div class="col-md-6">
                        <div class="form-group">
                            <br></br>
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" />
                        </div><br></br>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *"/>
                        </div><br></br>
                        <div class="form-group">
                            <input type="number" name="txtPhone" class="form-control" placeholder="Your Phone Number *"/>
                        </div><br></br>
                        <div>
                            <button type="submit" className='btn btn-danger' style={{marginLeft:"210px",marginTop:"15px",width:"200px"}}> Raise Query</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <br></br>
                            <textarea name="txtMsg" class="form-control" placeholder="Your Query *" style={{marginTop:"135px",width:"280px"}}></textarea>
                        </div>
                    </div>
                </div>
                
            </form>
            <h6 style={{marginLeft:"140px"}}>*Once query is raised , we will give a response to your queries in 24 hours*</h6>

</div>
    </div>
  )
}

export default Contact
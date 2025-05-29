const Footer = () => {
  return (
    <div className="flex justify-center w-screen h-[280px] bg-[#4338CA] text-[#fff] gap-12">
      <div className="flex justify-between container py-10 ">
        <div>
          <div className="flex items-center gap-2">
            <img src="./imgs/fillm.png" alt="" className=" w-5 h-5" />
            <p>Movie Z</p>
          </div>
          <div>
            <p>© 2024 Movie Z. All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex gap-24">
          <div className="flex flex-col gap-3">
            <div>
              <p>Contact Information</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="./imgs/mail.png" alt="" className=" w-5 h-5" />
              <div>
                <div>Email:</div>
                <div>support@movieZ.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="./imgs/phone.png" alt="" className=" w-5 h-5" />
              <div>
                <div>Phone:</div>
                <div>+976 (11) 123-4567</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>Follow us</div>
            <div>Facebook Instagram Twitter Youtube</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

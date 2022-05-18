import contact_img from "../images/contact_help.png";

import PageHero from "components/common/pageHero";
import { Formik, Form, Field } from "formik";
import Button from "UI/button";

interface Values {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: Values = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  return (
    <div>
      <PageHero link="contact">Contact Us</PageHero>
      <section className="xl:mt-32 tn:mt-16 mt-8 flex flex-col max-w-8xl mx-2 tn:mx-5 xl:mx-auto">
        <div className="flex sm:flex-row flex-col gap-x-14 xl:gap-x-28 mb-[7.5rem] xl:gap-y-0 gap-y-9">
          <div className="xl:max-w-[34.375rem] flex-1">
            <h1 className="contact-header">Information About us</h1>
            <p className="contact-text mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <div className="flex mt-[70px] gap-x-3">
              <div className="contact-color-sm bg-color-circles-violet" />
              <div className="contact-color-sm bg-color-circles-pink" />
              <div className="contact-color-sm bg-color-circles-turquoise" />
            </div>
          </div>
          <div className="flex-1 flex flex-col lg:items-start md:items-center items-start">
            <h1 className="contact-header">Contact Way</h1>
            <div className="grid lg:grid-cols-2 lg:grid-rows-2 sm:grid-cols-1 tn:grid-cols-2 tn:grid-rows-2 grid-cols-1 gap-3 sm:gap-6 xl:gap-12 mt-7">
              <div className="flex">
                <div className="tn1:contact-color-lg contact-color-sm bg-color-circles-violet mt-3" />
                <div className="tn1:ml-4 ml-2">
                  <a className="contact-text block" href="tel:877-67-88-99">
                    Tel: 877-67-88-99
                  </a>
                  <a className="contact-text block" href="email:shop@store.com">
                    E-Mail: shop@store.com
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="tn1:contact-color-lg contact-color-sm bg-color-circles-pink mt-3" />
                <div className="tn1:ml-4 ml-2">
                  <p className="contact-text">Support Forum</p>
                  <p className="contact-text">For over 24hr</p>
                </div>
              </div>
              <div className="flex">
                <div className="tn1:contact-color-lg contact-color-sm bg-color-circles-orange mt-3" />
                <div className="tn1:ml-4 ml-2">
                  <p className="contact-text">20 Margaret st, London</p>
                  <p className="contact-text">Great britain, 3NM98-LK</p>
                </div>
              </div>
              <div className="flex">
                <div className="tn1:contact-color-lg contact-color-sm bg-color-circles-green mt-3" />
                <div className="tn1:ml-4 ml-2">
                  <p className="contact-text">Free standard shipping</p>
                  <p className="contact-text">on all orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mb-16 md:mb-28 2xl:mb-60 md:flex-row flex-col lg:gap-y-0 gap-y-4 items-center">
          <div>
            <h1 className="contact-header">Get In Touch</h1>
            <p className="max-w-[34.375rem] contact-text mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(props) => {
                return (
                  <Form className="mt-10 max-w-[34.375rem]">
                    <div className="mb-9 flex tn:flex-row flex-col gap-y-5 tn:gap-y-0 ">
                      <Field
                        id="name"
                        name="name"
                        placeholder="Your Name*"
                        className="contact-input mr-6"
                        required
                      />
                      <Field
                        id="email"
                        name="email"
                        placeholder="Your Email*"
                        className="contact-input"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <Field
                        id="subject"
                        name="subject"
                        placeholder="Subject*"
                        className="contact-input"
                        required
                      />
                      <Field
                        id="message"
                        as="textarea"
                        name="message"
                        placeholder="Type Your Message*"
                        required
                        className="resize-none h-[10.375rem] contact-input mt-12 pt-1"
                      />
                    </div>
                    <Button className="mt-8 font-josefin-sans" type="submit">
                      Send Mail
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <img src={contact_img} alt="contact_img" className="md:max-w-[50%]" />
        </div>
      </section>
    </div>
  );
};

export default Contact;

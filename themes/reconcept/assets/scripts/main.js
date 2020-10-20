import $ from "jquery";
import ContactForm from "./contact-form";
import Navigation from "./navigation";
import SubNavigation from "./sub-navigation";

$(document).ready(function () {
  new Navigation();
  new SubNavigation();
  new ContactForm();
});

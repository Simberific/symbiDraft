package controllers;

import models.Person;
import play.*;
import play.data.Form;
import play.db.ebean.Model;
import play.mvc.*;

import views.html.*;

import java.util.Date;
import java.util.List;

import static play.libs.Json.toJson;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("Your new application is ready."));
    }

    public static Result addPerson() {
        Person person = Form.form(Person.class).bindFromRequest().get();
        person.save();
        return redirect(routes.Application.index());

    }

    public static Result getPersons() {
        List<Person> persons = new Model.Finder(String.class, Person.class).all();
        return ok(toJson(persons));
    }

    public static Result carousel() {
        return ok(carousel.render("Welcome to Symbi!"));
    }


    public static Result viewProfile(Long id) {
        return ok(viewProfile.render(Long.toString(id), "Simone", "Berkower", 1000, "Chelsea, Flatiron, East Village, Midtown, UES", new Date()));
    }

    public static Result browseUsers() {
        return ok(browseUsers.render());
    }


    public static Result browseApts() {
        return ok(browseApts.render());
    }

    public static Result oneProfile() {
        return ok(oneProfile.render());
    }

}
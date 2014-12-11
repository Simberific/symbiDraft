package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by Simone on 11/18/14.
 */

@Entity
public class Person extends Model {
    @Id
    public String id;
    public String name;

}

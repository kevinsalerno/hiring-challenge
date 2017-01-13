"use strict";
const route_1 = require("./route");
const user_1 = require("../schemas/user");
const mongoose = require("mongoose");
var User = mongoose.model("User", user_1.userSchema);
class UserRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("user route loaded");
        router.get("/", (req, res, next) => {
            new UserRoute().index(req, res, next);
        });
        router.get("/ivana", (req, res, next) => {
            new UserRoute().ivana(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = "Users";
        let options = {
            "message": "user route!"
        };
        this.render(req, res, "index", options);
    }
    ivana(req, res, next) {
        this.title = "Users: Ivana";
        let user = {
            email: "Ivana@bar.com",
            firstName: "Ivana",
            lastName: "Garcia"
        };
        var ivana = new User(user);
        console.log(ivana);
        console.log("SAVING");
        ivana.save(function (err, saved) {
            if (err)
                console.log(err);
            else {
                console.log(saved);
                let options = {
                    "message": "ivana user route!",
                    "user": ivana
                };
                this.render(req, res, "index", options);
            }
        });
    }
    createUser(req, res, next) {
        this.title = "CreateUser";
        let options = {
            "message": "creating user!"
        };
        this.render(req, res, "index", options);
    }
    getUser(req, res, next) {
    }
}
exports.UserRoute = UserRoute;

import pool from "../config/connectDB";

const getData = new Promise((resolve) => {
    pool.execute("select * from user", (err, results, fileds) => {
        resolve(results);
    });
});

const Controller = {
    async home(req, res) {
        const data = await getData;
        return res.render("home", { data: data });
    },
};

module.exports = Controller;

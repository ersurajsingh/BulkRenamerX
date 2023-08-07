const fs = require('fs');
const path = require('path');

try {
    fs.readdir("data", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            const ext = path.extname(item);
            let newFile = "data/" + 'IMG_' + (index + 1) + ext; // Append the extension to the new name
            fs.rename("data/" + item, newFile, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log("Rename Success");
            });
        }
    });
} catch (err) {
    console.error(err);
}

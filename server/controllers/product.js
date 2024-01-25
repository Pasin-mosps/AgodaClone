 
 
 exports.list = async (req,res) =>{
    res.send('Hello Controller get')
}

exports.read = async (req,res) => {
    res.send("Hello read from controller")
}

exports.create = async (req,res) => {
    res.send("Hello post from controller")
}

exports.update = async (req,res) => {
    res.send("Hello put from controller")
}

exports.remove = async (req,res) => {
    res.send("Hello post from controller")
}
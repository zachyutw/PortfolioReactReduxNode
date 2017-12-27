//keys.js figure out what set of credentials to return
if (process.env.NODE_ENV === 'production')
{ //we are in production
    module.exports = requrie('./prod');
} else {
    module.exports = requrie('./dev');
}
module.exports = {
   
    mongoURI:'mongodb://sa:!234qwer@ds131697.mlab.com:31697/stepheng-study-prod',
    googleClientID:'1033193057807-md6eklrpda2mrrnrgbiegc83783gpga3.apps.googleusercontent.com',
    googleClientSecret:'YRmqLrQ-_LwjnOnaZgOrGjfz'
}
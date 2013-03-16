task :test do
    sh "node test/test.js"
end

task :test_ui, [:host_url] do |t, args|
    sh "node test/selenium.js --seleniumTargetUrl #{args.host_url}"
end

task :deploy_from_travis_to_heroku, [:app] do |t, args|
    sh 'wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh'
    sh "git remote add heroku git@heroku.com:#{args.app}.git"
    sh 'echo "Host heroku.com" >> ~/.ssh/config'
    sh 'echo "   StrictHostKeyChecking no" >> ~/.ssh/config'
    sh 'echo "   CheckHostIP no" >> ~/.ssh/config'
    sh 'echo "   UserKnownHostsFile=/dev/null" >> ~/.ssh/config'
    sh 'heroku keys:clear'
    sh 'yes | heroku keys:add'
    sh 'yes | git push heroku master'
end
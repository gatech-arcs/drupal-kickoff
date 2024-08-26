<?php
#
# https://www.drupal.org/project/dotenv
# https://git.drupalcode.org/project/dotenv/-/blob/1.2.x/files/load.environment.php
#
# On live environments, you should invoke drush dotenv:dump every time your .env file changes. If you don't, the .env file will be loaded at every request, which will decrease the performance of your application.
#
# You can use the drush dotenv:dump command to get debugging info about the scanned dotenv files and the loaded variables.

use Symfony\Component\Dotenv\Dotenv;

(new Dotenv())->usePutenv()->bootEnv(DRUPAL_ROOT . '/../.env', 'dev', ['test'], true);

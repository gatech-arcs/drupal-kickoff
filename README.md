# Drupal Kickoff

![Visibility: Intentionally Public](https://flat.badgen.net/badge/Visibility/Intentionally%20Public/f2a)
![Protected Data: None](https://flat.badgen.net/badge/Protected%20Data/None/f96854)

Composer and initial configuration starting point for GT College of Sciences Drupal projects, based on minimal or no installation profile and then mixing in recipes.

## Drupal Recipes

[Drupal Recipes](https://www.drupal.org/docs/extending-drupal/drupal-recipes) are a way to define a set of modules and configuration that can be installed with a single command. This project calls recipes for installing common configuration and modules to allow lifecycle adaptation without being pinned to a specific base profile.

[Applying Recipes](https://www.drupal.org/project/distributions_recipes)

## Will call recipes and modules

- gtsciences/gt-standard -- Recipe for common core modules and configuration
- gtsciences/gt-sso -- Recipe for GT SSO logins
- gtsciences/gt-seo-social -- Recipe for SEO and social linking utilities
- gtsciences/gt_theme -- modified from IC's GT theme
- gtsciences/gt_tools -- to help with compatibility with campus builds
- gtsciences/hg-reader -- Mercury Syndication module using core media

## Useful References

[Composer Patches](https://github.com/cweagans/composer-patches)
[Composer Recipe Unpack](https://gitlab.ewdev.ca/yonas.legesse/drupal-recipe-unpack)
[Recipes take inpute in 11.1](https://www.drupal.org/node/3470507)

[![Coding Style: Drupal](https://flat.badgen.net/badge/code%20style/Drupal/009cde?icon=php)](https://www.drupal.org/docs/develop/standards/php/php-coding-standards)
[![GitHub Super-Linter](https://github.com/gatech-arcs/drupal-kickoff/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
![Dependabot Status](https://flat.badgen.net/github/dependabot/ubuntu/yaru)

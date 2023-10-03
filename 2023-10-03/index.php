<?php 

require_once './vendor/autoload.php';

$climate = new \League\CLImate\CLImate;

$climate->red('Whoa now this text is red.');
$climate->blue('Blue? Wow!');

\Jovitos\Pc20231003\A::index();


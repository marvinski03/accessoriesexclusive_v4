<?php

namespace AccessoriesExclusive\Containers;

use Plenty\Plugin\Templates\Twig;

class AccessoriesExclusiveContainer
{
    public function call(Twig $twig):string
    {
        return $twig->render('AccessoriesExclusive::Stylesheet');
    }
}
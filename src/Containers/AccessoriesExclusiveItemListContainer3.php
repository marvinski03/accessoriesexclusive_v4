<?php

namespace AccessoriesExclusive\Containers;

use Plenty\Plugin\Templates\Twig;

class AccessoriesExclusiveItemListContainer3
{
    public function call(Twig $twig, $arg):string
    {
        return $twig->render('AccessoriesExclusive::Containers.ItemLists.ItemList3', ["item" => $arg[0]]);
    }
}
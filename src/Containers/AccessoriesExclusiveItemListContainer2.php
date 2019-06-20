<?php

namespace AccessoriesExclusive\Containers;

use Plenty\Plugin\Templates\Twig;

class AccessoriesExclusiveItemListContainer2
{
    public function call(Twig $twig, $arg):string
    {
        return $twig->render('AccessoriesExclusive::Containers.ItemLists.ItemList2', ["item" => $arg[0]]);
    }
}
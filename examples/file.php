<?php

class Vegetable {

    var $edible;
    var $color;

    function Vegetable($edible, $color="green")
    {
        $this->edible = $edible;
        $this->color = $color;
    }

    function is_edible()
    {
        return $this->edible;
    }

    function what_color()
    {
        return $this->color;
    }

}

class Spinach extends Vegetable {

    var $cooked = false;

    function Spinach()
    {
        $this->Vegetable(true, "green");
    }

    function cook_it()
    {
        $this->cooked = true;
    }

    function is_cooked()
    {
        return $this->cooked;
    }
}


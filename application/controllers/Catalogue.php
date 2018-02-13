<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Catalogue extends Application
{

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/
     * 	- or -
     * 		http://example.com/welcome/index
     *
     * So any other public methods not prefixed with an underscore will
     * map to /welcome/<method_name>
     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function index()
    {
        // build navbar
        $this->data['menubar'] = $this->parser->parse('_menubar', $this->config->item('menu_choices'), true);
        $this->data['pagetitle'] = "Catalogue";
        $this->data['pagebody'] = 'CataloguePage';
        
        $this->load->model('Inventory');
        //$all_the_items = $this->Inventory->all();

        // get all of the entrees
        //$subset = $this->Inventory->where('category','entree');
        
        $this->render();
    }

}
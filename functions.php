<?php
    add_theme_support('title-tag');
    add_filter('document_title_separator', 'my_document_title_separator');
    function my_document_title_separator($separator) {
        $separator ='|';
        return $separator;
    }

    add_filter('document_title_parts', 'my_document_title_parts');
    function my_document_title_parts ($title) {
        if (is_home()) {
            unset($title['tagline']);
            $title['title'] = 'BISTRO CALMEはカジュアルなワインバーよりなビストロです。';
        }
        return $title;
    }

    add_theme_support('post-thumbnais');
?>
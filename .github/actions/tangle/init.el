
;; The bare minimum configuration needed for tangling code &
;; publishing the documentation.

(prefer-coding-system 'utf-8)

(require 'package)
(add-to-list 'package-archives '("gnu"   . "https://elpa.gnu.org/packages/"))
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/"))
(package-initialize)

(unless package-archive-contents
  (package-refresh-contents))

(load-theme 'modus-operandi-deuteranopia 'no-confirm)

(use-package s :ensure t)
(use-package dash :ensure t)
(use-package clojure-mode :ensure t)
(use-package cider :ensure t)
(use-package htmlize :ensure t)
(use-package org
  :ensure t
  :config
  (require 'ox-publish)
  (require 'ox-html)
  (setq org-babel-clojure-backend 'cider
        org-confirm-babel-evaluate nil
        org-src-fontify-natively t
        org-latex-listings 'minted
        org-html-doctype "html5"
        org-export-htmlize-output-type 'css
        org-html-htmlize-output-type 'css)
  (org-babel-do-load-languages
   'org-babel-load-languages
   (append org-babel-load-languages '((clojure . t)
                                      (emacs-lisp . t)
                                      (js . t)
                                      (shell . t)))))

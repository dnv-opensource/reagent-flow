
;; The bare minimum configuration needed for tangling code &
;; publishing the documentation.

(prefer-coding-system 'utf-8)

(require 'package)
(add-to-list 'package-archives '("gnu"   . "https://elpa.gnu.org/packages/"))
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/"))
(package-initialize)

(unless package-archive-contents
  (package-refresh-contents))

(unless (package-installed-p 'use-package)
  (package-install 'use-package))

(eval-and-compile
  (setq use-package-always-ensure t
        use-package-expand-minimally t))

(use-package s
  :ensure t)
(use-package dash)
(use-package clojure-mode)
(use-package cider)
(use-package org
  :config
  (setq org-babel-clojure-backend 'cider
        org-confirm-babel-evaluate nil)

  (org-babel-do-load-languages
   'org-babel-load-languages
   (append org-babel-load-languages '((clojure . t)
                                      (emacs-lisp . t)))))
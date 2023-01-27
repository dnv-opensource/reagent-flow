
;; The bare minimum configuration needed for tangling code &
;; publishing the documentation.

(prefer-coding-system 'utf-8)
(dolist (package '("s.el" "dash.el" "clojure-mode"))
  (add-to-list 'load-path (expand-file-name package ".github/workflows/packages")))

(require 's)
(require 'dash)
(require 'clojure-mode)
(require 'org)
(require 'ob-lob)
(require 'ob-tangle)
(setq-default org-confirm-babel-evaluate nil)
(org-babel-do-load-languages
 'org-babel-load-languages
 (append org-babel-load-languages '((clojure . t)
                                    (emacs-lisp . t))))

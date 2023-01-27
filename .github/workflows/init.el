
;; The bare minimum configuration needed for tangling code &
;; publishing the documentation.

(prefer-coding-system 'utf-8)
(add-to-list 'load-path (expand-file-name ".github/workflows/packages/s.el"))
(add-to-list 'load-path (expand-file-name ".github/workflows/packages/dash.el"))


(require 's)
(require 'dash)

(require 'org)
(require 'ob-lob)
(require 'ob-tangle)
(setq-default org-confirm-babel-evaluate nil)
(org-babel-do-load-languages
 'org-babel-load-languages
 (append org-babel-load-languages '((clojure . t)
                                    (emacs-lisp . t))))
